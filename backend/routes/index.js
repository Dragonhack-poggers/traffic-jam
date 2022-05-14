import express from 'express';

const router = express.Router({});

router.use('/event', databaseRouter);

export default router;