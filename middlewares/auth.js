import express from 'express';
import passport from 'passport';
import { Strategy as BearerStrategy } from 'passport-http-bearer';

/**
 * Here, we have to find the user
 * based on the given token (authentication).
 * Assuming we use the Bearer strategy,
 * but we can replace the strategy with any other strategy of course.
 */
passport.use(new BearerStrategy((token, done) => {

    // Mock user
    const user = {
        name: 'Jesse',
    };

    /**
     * Just pass `undefined` as fallback,
     * so the authorization can happen in your GraphQL Schema resolve functions.
     */
    done(null, user || undefined);
}));

const middleware = express();
middleware.use(passport.initialize());
middleware.use(passport.session());
export default middleware;
