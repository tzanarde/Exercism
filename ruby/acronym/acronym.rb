class Acronym
  def self.abbreviate(phrase)
    acronym = ''
    phrase.gsub('-', ' ').split(' ').each do |word|
       acronym += word[0].capitalize
    end
    acronym
  end
end
