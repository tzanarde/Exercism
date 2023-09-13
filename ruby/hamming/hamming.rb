class Hamming
  def self.compute(old_strand, new_strand)
    raise ArgumentError if old_strand.length != new_strand.length
    hamming_distance = 0
    old_strand.split('').each_with_index do |dna_letter, index|
      hamming_distance += 1 unless dna_letter == new_strand[index]
    end
    hamming_distance
  end
end
