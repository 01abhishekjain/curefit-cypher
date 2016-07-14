function DECODE1(input){

	//NOTE: ᴥ = START CODON, ᶅ = STOP CODON
	var masterArr = ['ᴥ','ᶅ','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9','~','!','@','#','$','%','^','&','*','(',')','-','+','{','}','\\','\/','<','>','\,','.','?',':',';','`',' '];
	var output= "";

	for (var i = 0; i < input.length; i+=3) {

		// n for Nucleotide :)
		var n1 = input[i],
			n2 = input[i+1],
			n3 = input[i+2];
		var codon = n1+n2+n3;
		var idx = 0;

		switch(n1){
			case 'T': idx+=0; break;
			case 'C': idx+=16; break;
			case 'A': idx+=32; break;
			case 'G': idx+=48; break;
			default: console.log("Err at Nucleotide 1 of codon "+codon); break;
		}
		switch(n2){
			case 'T': idx+=0; break;
			case 'C': idx+=4; break;
			case 'A': idx+=8; break;
			case 'G': idx+=12; break;
			default: console.log("Err at Nucleotide 2 of codon "+codon); break;
		}
		switch(n3){
			case 'T': idx+=0; break;
			case 'C': idx+=1; break;
			case 'A': idx+=2; break;
			case 'G': idx+=3; break;
			default: console.log("Err at Nucleotide 3 of codon "+codon); break;
		}

		console.log( codon+" ("+ idx + ") = "+ masterArr[idx]);

		output += masterArr[idx];

	}

	return output;

}

var input = "GGCTACTAACATGCCTTTCAACTTCCAGGGTTACTGTCAGGGTACTTATGCTCGCATTTACAAGGGCCCTACTCACTGTCAGAAGGGCTTTGGTCTTCAGGGCAATTCAAAAGAGAACCTACCGATCAATCCATCAGAGAACGAGCTTGGATGTGATACCCCTCACGCAGAAACGGCAGTTTGCATGTGGCGCGACAAAGCACCGCTTACGGAATGGATGTCGGGTGTCCGGGATACACTACTGGCTATAACATTCTGTATCAAGGCTCGGGTCGTATGGGTTAGGATGAGGTAGATCTAGAAGCTTTTCTTCCAGGGCCTCTTTTCTACGAGCGAGCCGCGATACACTCAGAATTGCAGCGTACCCTTTCTTGGATTTAACCAAATAAGCATTACCATCTAAACCATAGATATCAATAAACTGAAATGACACCTGCCGTCGGTTCTACCCGATGCGAATGGTTGAATCCGACGCAATTGACGATTCCAGGCCGGGGCACTATGCAGACGCAAAACCAAAATTTGTAATACATGCGCGGGATGCGGTGTAGAGATCTTTAGACGCTAGCCGCTCGGAAAATGTGTTGGTTTTGCCCGTCAGGGCCCTACTCAGGGTCATGGTAATATTGATTAGACGGGTCCCTGCTTCTCGGGCCACCTGGGTTAGGGTTCCAGCCCGTCCAATAGCTAGGTTTTTGATTATAATGCGGGTTACCCGGGTTATACTGACACTGCCCGCTACTATAAAATTCTCCACTGTCATCGTAACCCGAATCTCTTTGATTCTCACTTACTGTCGACGGCTCGGTTCTTCCAAGCACTGCA";
var output = DECODE1(input);
console.log(output);

