class WordProblem

  SUPPORTED_OPERATIONS = ['plus', 'minus', 'multiplied', 'divided']

  def initialize(problem)
    @problem_elements = problem.downcase.gsub('what is ', '')
                                        .gsub('by', '')
                                        .gsub('?', '')
                                        .split(' ')

  end

  def answer
    @numbers = []
    @operations = []
    @problem_elements.each do |element|
      distribute_element!(element)
    end
    problem_answer = @numbers[0].to_i
    @operations.each_with_index do |operation, index|
      current_number = @numbers[index + 1].to_i
      problem_answer += current_number if plus_operation?(operation)
      problem_answer -= current_number if minus_operation?(operation)
      problem_answer *= current_number if multiply_operation?(operation)
      problem_answer /= current_number if division_operation?(operation)
    end
    problem_answer
  end

  private

  def distribute_element!(element)
    if numeric?(element)
      @numbers << element
    elsif supported_operation?(element)
      @operations << element
    else
      raise ArgumentError
    end
  end

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
