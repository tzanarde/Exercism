class Hamming
  def self.compute(old_strand, new_strand)
    raise ArgumentError if incompatible_strands?(old_strand.length, new_strand.length)
    hamming_distance = 0
    0.upto old_strand.length do |index|
      hamming_distance += 1 unless letter_match?(old_strand[index], new_strand[index])
    end
    hamming_distance
  end

  private

  def self.incompatible_strands?(old_strand_length, new_strand_length)
    old_strand_length != new_strand_length
  end

  def self.letter_match?(old_dna_letter, new_dna_letter)
    old_dna_letter == new_dna_letter
  end
end
