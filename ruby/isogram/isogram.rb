class Isogram
  def self.isogram?(word)
    splitted_word = word_to_array(word)
    splitted_word == splitted_word.uniq
  end

  def self.word_to_array(word)
    word.downcase.gsub(' ', '').gsub('-', '').split('')
  end
end
