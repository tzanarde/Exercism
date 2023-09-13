module Port
  IDENTIFIER = :PALE

  def self.get_identifier(port_name)
    port_name[0..3].upcase.to_sym
  end

  def self.get_terminal(ship_identifier)
    return :A if ['OIL', 'GAS'].include? cargo_type(ship_identifier)
    :B
  end

  private

  def self.cargo_type(ship_identifier)
    ship_identifier.to_s[0..2]
  end
end
