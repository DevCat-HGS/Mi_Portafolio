const nodemailer = require('nodemailer');
const config = require('./config');

/**
 * Función para enviar correos electrónicos
 * @param {Object} mailOptions - Opciones del correo
 * @param {string} mailOptions.to - Destinatario del correo
 * @param {string} mailOptions.subject - Asunto del correo
 * @param {string} mailOptions.text - Contenido en texto plano
 * @param {string} mailOptions.html - Contenido en HTML (opcional)
 * @param {Array} mailOptions.attachments - Archivos adjuntos (opcional)
 * @returns {Promise} - Promesa con el resultado del envío
 */
async function sendEmail(mailOptions) {
  try {
    // Crear un transporter con la configuración SMTP
    const transporter = nodemailer.createTransport(config);
    
    // Configurar el remitente por defecto si no está especificado
    if (!mailOptions.from) {
      mailOptions.from = config.auth.user;
    }
    
    // Enviar el correo
    const info = await transporter.sendMail(mailOptions);
    
    console.log('Correo enviado correctamente');
    console.log('ID del mensaje:', info.messageId);
    return info;
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    throw error;
  }
}

module.exports = { sendEmail };