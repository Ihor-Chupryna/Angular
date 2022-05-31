export const RegEx = {
  username: new RegExp(/^[a-z][a-z\d]{1,19}$/),
  password: new RegExp(/^[^я-яА-яёЁіІїЇ\s]$/),
  model: new RegExp(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/),
}
