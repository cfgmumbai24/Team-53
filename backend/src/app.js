import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// middleware configuration
const corsOptions = {
    origin: (origin, callback) => {
        callback(null, origin);
    },
    credentials: true,
};
app.use(cors(corsOptions));

app.use(
    express.json({
        limit: "32kb",
    })
);

app.use(
    express.urlencoded({
        extended: true,
        limit: "32kb",
    })
);

app.use(express.static("public"));

app.use(cookieParser());

import adminRouter from './routes/admin.route.js';
import fellowRouter from './routes/fellow.route.js';
import studentRouter from './routes/student.route.js';
import assessmentRouter from './routes/assessment.route.js';

app.use('/api/v1/student', studentRouter);
app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/fellow', fellowRouter);
app.use('/api/v1/assessment', assessmentRouter);

export { app };