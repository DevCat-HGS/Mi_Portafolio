# Sistema de Envío de Correos con Nodemailer

Este proyecto implementa un sistema simple para enviar correos electrónicos usando Node.js y Nodemailer.

## Requisitos

- Node.js (versión 12 o superior)
- Cuenta de correo electrónico (Gmail, Outlook, etc.)

## Instalación

1. Clona este repositorio o descarga los archivos
2. Instala las dependencias:

```bash
npm install
```

3. Configura las variables de entorno:
   - Crea o modifica el archivo `.env` con tus credenciales:
   ```
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=tu_correo@gmail.com
   EMAIL_PASS=tu_contraseña_de_aplicacion
   ```

   > **Nota para Gmail**: Si usas Gmail, necesitarás una "contraseña de aplicación" en lugar de tu contraseña normal. [Aprende cómo crear una contraseña de aplicación](https://support.google.com/accounts/answer/185833).

## Uso

### Enviar un correo simple

```javascript
const { sendEmail } = require('./mailer');

async function enviarCorreo() {
  const mailOptions = {
    to: 'destinatario@ejemplo.com',
    subject: 'Asunto del correo',
    text: 'Contenido en texto plano',
    html: '<p>Contenido en <b>HTML</b></p>'
  };

  try {
    const resultado = await sendEmail(mailOptions);
    console.log('Correo enviado:', resultado.messageId);
  } catch (error) {
    console.error('Error:', error);
  }
}

enviarCorreo();
```

### Enviar correo con archivos adjuntos

```javascript
const mailOptions = {
  to: 'destinatario@ejemplo.com',
  subject: 'Correo con adjuntos',
  text: 'Te envío los archivos solicitados',
  attachments: [
    {
      filename: 'documento.pdf',
      path: '/ruta/al/archivo.pdf'
    },
    {
      filename: 'imagen.jpg',
      path: '/ruta/a/imagen.jpg'
    }
  ]
};

sendEmail(mailOptions);
```

## Estructura del Proyecto

- `index.js` - Archivo principal con ejemplo de uso
- `mailer.js` - Módulo con la función para enviar correos
- `config.js` - Configuración del servidor SMTP
- `.env` - Archivo con variables de entorno (credenciales)

## Licencia

ISC