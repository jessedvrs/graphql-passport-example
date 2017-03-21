import passport from 'passport';
import graphqlHTTP from 'express-graphql';
import schema from '../api';

export default graphqlHTTP((req, res) => {
    return new Promise((resolve, reject) => {
        const next = (user, info = {}) => {

            /**
             * GraphQL configuration goes here
             */
            resolve({
                schema,
                graphiql: process.env.NODE_ENV !== 'production', // <- only enable GraphiQL in production
                context: {
                    user: user || null,
                },
            });
        };

        /**
         * Try to authenticate using passport,
         * but never block the call from here.
         */
        passport.authenticate('bearer', {session: false}, (err, user) => {
            next(user);
        })(req, res, next);
    });
});
