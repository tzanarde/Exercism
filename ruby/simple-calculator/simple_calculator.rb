class SimpleCalculator
  class UnsupportedOperation < StandardError; end

  ALLOWED_OPERATIONS = ['+', '/', '*'].freeze

  def self.calculate(first_operand, second_operand, operation)
    return 'Division by zero is not allowed.' if division_by_zero?(second_operand, operation)
    raise UnsupportedOperation.new('UnsupportedOperation') unless allowed_operation?(operation)
    raise ArgumentError.new('ArgumentError') unless non_numeric_operands?(first_operand, second_operand)
    convert_calculation_to_text!(first_operand, second_operand, operation)
  end

  def self.division_by_zero?(divider, operation)
    operation == '/' and divider == 0
  end

  def self.allowed_operation?(operation)
    ALLOWED_OPERATIONS.include? operation
  end

  def self.non_numeric_operands?(first_operand, second_operand)
    first_operand.is_a? Numeric and second_operand.is_a? Numeric
  end

  def self.calculation_result(first_operand, second_operand, operation)
    case operation
    when '+'
      calculation_result = first_operand + second_operand
    when '/'
      calculation_result = first_operand / second_operand
    else '*'
      calculation_result = first_operand * second_operand
    end
  end

  def self.convert_calculation_to_text!(first_operand, second_operand, operation)
    "#{first_operand} #{operation} #{second_operand} = #{calculation_result(first_operand, second_operand, operation)}"
  end
end
