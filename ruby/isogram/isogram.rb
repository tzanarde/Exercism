class Isogram
  CHARACTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  def self.isogram?(word)
    CHARACTERS.each do |letter|
      return false if multiple_appearances?(word, letter)
    end
    true
  end

  def self.multiple_appearances?(word, letter)
    word.upcase.scan(letter).length > 1
  end
end
