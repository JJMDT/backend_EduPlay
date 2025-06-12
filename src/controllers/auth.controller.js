const authService = require('../services/auth.service');



exports.login = async (req, res) => {
    try {
        const user = await authService.loginService(req.body);
        res.status(200).json(user);

    } catch (error) {
        res.status(500).json({ error: 'Error al iniciar sesión: ' + error.message });
    }    
}