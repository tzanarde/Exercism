class RotationalCipher

  ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  def self.rotate(text, rotational_cipher)
    ciphertext = ''
    text.split('').each do |letter|
      if letter?(letter)
        ciphertext += ciphed_letter(letter, rotational_cipher)
      else
        ciphertext += letter
      end
    end
    ciphertext
  end

  def self.ciphed_letter(letter, rotational_cipher)
    ciphed_position = ALPHABET.index(letter.downcase) + rotational_cipher
    if ciphed_position >= 26
      return ALPHABET[ciphed_position - 26].upcase if upper?(letter)
      ALPHABET[ciphed_position - 26].downcase if lower?(letter)
    else
      return ALPHABET[ciphed_position].upcase if upper?(letter)
      ALPHABET[ciphed_position].downcase if lower?(letter)
    end
  end

  def self.upper?(letter)
    letter == letter.upcase
  end

  def self.lower?(letter)
    letter == letter.downcase
  end

  def self.letter?(letter)
    ALPHABET.include? letter.downcase
  end
end
