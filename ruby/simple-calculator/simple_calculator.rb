class SimpleCalculator
  class UnsupportedOperation < StandardError
  end

  ALLOWED_OPERATIONS = ['+', '/', '*'].freeze

  def self.calculate(first_operand, second_operand, operation)
    return 'Division by zero is not allowed.' if second_operand == 0 and operation == '/'
    raise UnsupportedOperation.new('UnsupportedOperation') unless ALLOWED_OPERATIONS.include? operation
    raise ArgumentError.new('ArgumentError') unless first_operand.is_a? Numeric and second_operand.is_a? Numeric
    case operation
    when '+'
      calculation_result = first_operand + second_operand
    when '/'
      calculation_result = first_operand / second_operand
    else '*'
      calculation_result = first_operand * second_operand
    end
    "#{first_operand} #{operation} #{second_operand} = #{calculation_result}"
  end
end
