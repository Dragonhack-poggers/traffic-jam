const router = express.Router({});

router.use('/event', databaseRouter);

export default router;