class Raindrops
  def self.convert(number)
    raindrop_sounds = ''
    factor = Factor.new(number)
    raindrop_sounds += 'Pling' if factor.divisible_by_3?
    raindrop_sounds += 'Plang' if factor.divisible_by_5?
    raindrop_sounds += 'Plong' if factor.divisible_by_7?
    if raindrop_sounds.empty?
      number.to_s
    else
      raindrop_sounds
    end
  end
end

class Factor

  def initialize(number)
    @number = number
  end

  def divisible_by_3?
    @number % 3 == 0
  end

  def divisible_by_5?
    @number % 5 == 0
  end

  def divisible_by_7?
    @number % 7 == 0
  end
end
