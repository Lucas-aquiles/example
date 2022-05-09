const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const countryRouter = require('./country.js');
const activityRouter = require('./activity.js');
//
const information = require('./information.js');
//

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', countryRouter)
router.use('/activities', activityRouter)
//
router.use('/infodb', information)
//
module.exports = router;














module.exports = router;