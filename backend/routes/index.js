const router = express.Router({});

router.use('/closure', closureRouter);
router.use('/cover/minimal', minCoverRouter);
router.use('/cover/canonical', canCoverRouter);
router.use('/primary-key', primKeyRouter);
router.use('/foreign-key', forKeyRouter);
router.use('/normalization', normalizationRouter);
router.use('/convert-to-sql', convSQLRouter);
router.use('/check', checkRouter);

export default router;