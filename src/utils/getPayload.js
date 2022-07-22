export default function (token) {
  //Obtener el token de localStorage
  //const token = window.localStorage.getItem('token')

  if (token) {
    //Extraer el payload del JWT
    //lo primero que encuentres antes del punto guardalo en cada constante
    // string convierte una cada string en arreglo
    // eslint-disable-next-line no-unused-vars
    const [header, payload, signature] = token.split('.')

    // Blindar el payload al reemplazar caracteres basura que se meten
    const base64 = payload.replace('-', '+').replace('_', '/')

    // atob convierte Base64 a String:
    // '{"id":"62733375fb365600176d7cce","role":"CUSTOMER","exp":1658448318,"iat":1658361918}'
    // JSON.parse convierte de String JSON a Objeto de JavaScript
    const PayloadObject = JSON.parse(window.atob(base64))
    return PayloadObject
  } else {
    return null
  }
}
