const authService = require('../services/auth.service');

exports.login = (req, res) => {
    res.send('Login endpoint');
}
exports.register = async (req, res) => {
    try {
        const usuario = req.body;
        res.send( await authService.registerService(usuario))
        
    } catch (error) {
        res.status(500).json({ error: 'Error al registrar el usuario: ' + error.message });
    }
}
