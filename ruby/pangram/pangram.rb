class Pangram
  ALPHABET = [*'a'..'z']

  def self.pangram?(sentence)
    (ALPHABET - splitted_sentence(sentence)).empty?
  end

  def self.splitted_sentence(sentence)
    sentence.downcase.split('').uniq
  end
end
