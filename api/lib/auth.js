const passport = require("passport");
const { ExtracJwt, Strategy } = require("passport-jwt");
const Users = require("../db/models/Users");
const UserRoles = require("../db/models/UserRoles");

const config = require("../config");

module.exports = () => {
  let strategy = new Strategy(
    {
      secretOrKey: config.JWT.SECRET,
      jwtFromRequest: ExtracJwt.fromAuthHeaderAsBearerToken(),
    },
    async (payload, done) => {
      try {
        let user = await Users.findOne({ _id: payload.id });
        if (user) {
          let userRoles = await UserRoles.find({ user_id: payload.id });
          let rolePrivileges = await RolePrivileges.find({
            role_id: { $in: userRoles.map((ur) => ur.role_id) },
          });

          done(null, {
            id: user._id,
            roles: rolePrivileges,
            email: user.email,
            firs_name: user.first_name,
            last_name: user.last_name,
            exp: parseInt((Date.now() / 1000) * config.JWT.EXPIRE_TIME),
          });
        } else {
          done(new Error("User not found"), null);
        }
      } catch (err) {
        done(err, null);
      }
    }
  );

  passport.use(strategy);

  return {
    initialize: () => {
      return passport.initialize();
    },
    authenticate: () => {
      return passport.authenticate("jwt", { session: false });
    },
  };
};
