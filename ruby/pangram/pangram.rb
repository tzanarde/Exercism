class Pangram
  ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
              'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
              'u', 'v', 'w', 'x', 'y', 'z']

  def self.pangram?(sentence)
    (ALPHABET - splitted_sentence(sentence)).empty?
  end

  def self.splitted_sentence(sentence)
    sentence.downcase.split('').uniq
  end
end
