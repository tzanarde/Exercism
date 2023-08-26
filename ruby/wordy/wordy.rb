class WordProblem

  SUPPORTED_OPERATIONS = ['plus', 'minus', 'multiplied', 'divided']

  def initialize(problem)
    @problem = problem.downcase
  end

  def answer
    numbers = []
    operations = []
    @problem.gsub('what is ', '').gsub('by', '').gsub('?', '').split(' ').each do |element|
      if numeric?(element)
        numbers << element
      elsif supported_operation?(element)
        operations << element
      else
        raise ArgumentError
      end
    end
    index = 0
    calculation_result = numbers[0].to_i
    operations.each do |operation|
      calculation_result += numbers[index + 1].to_i if plus_operation?(operation)
      calculation_result -= numbers[index + 1].to_i if minus_operation?(operation)
      calculation_result *= numbers[index + 1].to_i if multiply_operation?(operation)
      calculation_result /= numbers[index + 1].to_i if division_operation?(operation)
      index += 1
    end
    calculation_result
  end

  private

  def plus_operation?(operation)
    operation == 'plus'
  end

  def minus_operation?(operation)
    operation == 'minus'
  end

  def multiply_operation?(operation)
    operation == 'multiplied'
  end

  def division_operation?(operation)
    operation == 'divided'
  end

  def supported_operation?(operation)
    SUPPORTED_OPERATIONS.include? operation
  end

  def numeric?(string_number)
    not (string_number.split('') - [*'a'..'z']).empty?
  end

end
