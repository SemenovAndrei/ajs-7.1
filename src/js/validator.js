/* eslint-disable no-unused-vars */
/**
 * Validator
 */
class Validator {
  /**
   * Проверяет name на корректность, согласно правилам
   *
   * @param {string} name - Строка для проверки
   *
   * @throws {error} - Выбрасывает ошибки name
   */
  static validateUsername(name) {
    if (/[^a-z\d-_]/i.test(name)) {
      throw new Error('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)');
    }
    if (/^[\d_-]|\d{3}|[\d_-]$/.test(name)) {
      throw new Error('Имя не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться цифрами, символами подчёркивания или тире');
    }
    return true;
  }
}

export default Validator;
