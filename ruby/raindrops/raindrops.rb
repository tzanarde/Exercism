class Raindrops
  def self.convert(number)
    raindrops_sounds = ''
    factor = Factor.new(number)
    raindrops_sounds += 'Pling' if factor.divisible_by_3?
    raindrops_sounds += 'Plang' if factor.divisible_by_5?
    raindrops_sounds += 'Plong' if factor.divisible_by_7?
    return number.to_s if raindrops_sounds.empty?
    raindrops_sounds
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
