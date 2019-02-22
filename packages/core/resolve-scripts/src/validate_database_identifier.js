const regExp = /^[a-z_][a-z0-9_]*$/i

const validateDatabaseIdentifier = identifier => {
  if (identifier == null) {
    throw new Error('Identifier must have a non-null value.')
  }

  if (identifier.constructor !== String) {
    throw new Error('Identifier must be a string')
  }

  if (identifier.length === 0) {
    throw new Error('Identifier must be non-empty sting')
  }

  if (identifier.length > 64) {
    throw new Error('Identifier must be no more than 64 characters')
  }

  if (!regExp.test(identifier)) {
    throw new Error(
      'Identifier must be start with an alphabetic character or the underscore _ and ' +
        'can contain only alphanumeric characters and the underscore _'
    )
  }
}

export default validateDatabaseIdentifier
