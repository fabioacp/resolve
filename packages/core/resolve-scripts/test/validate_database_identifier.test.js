import validateDatabaseIdentifier from '../src/validate_database_identifier'

describe('method "validateDatabaseIdentifier"', () => {
  test('should successfully validate identifiers', () => {
    expect(() => validateDatabaseIdentifier('a')).not.toThrow()
    expect(() => validateDatabaseIdentifier('a1')).not.toThrow()
    expect(() => validateDatabaseIdentifier('ab')).not.toThrow()
    expect(() => validateDatabaseIdentifier('ab1')).not.toThrow()
    expect(() => validateDatabaseIdentifier('ab_')).not.toThrow()
    expect(() => validateDatabaseIdentifier('ab_1')).not.toThrow()
    expect(() => validateDatabaseIdentifier('_test123')).not.toThrow()
    expect(() =>
      validateDatabaseIdentifier('long_name_long_name_long_name_long_name_42')
    ).not.toThrow()
  })

  test('should throw error', () => {
    expect(() => validateDatabaseIdentifier(null)).toThrow()

    expect(() => validateDatabaseIdentifier(undefined)).toThrow()

    expect(() => validateDatabaseIdentifier('')).toThrow()

    expect(() => validateDatabaseIdentifier('123')).toThrow()

    expect(() => validateDatabaseIdentifier('123abc')).toThrow()

    expect(() =>
      validateDatabaseIdentifier(
        Array(65)
          .fill('a')
          .join('')
      )
    ).toThrow()
  })
})
