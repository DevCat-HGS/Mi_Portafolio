const express = require('express');
const cors = require('cors');
const { sendEmail } = require('./mailer');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Ruta para enviar correos
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Todos los campos son requeridos' 
      });
    }

    const mailOptions = {
      from: email,
      to: 'prototiphs0108@gmail.com', // Correo de destino
      subject: `Mensaje de contacto de ${name}`,
      html: `
        <h1>Nuevo mensaje de contacto</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `
    };

    const resultado = await sendEmail(mailOptions);
    res.status(200).json({ 
      success: true, 
      message: 'Correo enviado exitosamente',
      messageId: resultado.messageId 
    });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error al enviar el correo',
      error: error.message 
    });
  }
});

// Ruta de prueba
app.get('/api/test', (req, res) => {
  res.json({ message: 'API de correo funcionando correctamente' });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor de correo ejecutándose en http://localhost:${PORT}`);
});