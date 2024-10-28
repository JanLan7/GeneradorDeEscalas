function mostrarEscala() {
    let tonica = document.getElementById("escala").value;
    let tipoEscala = document.getElementById("tipoEscala").value;

    
  // Escalas
const escalas = {
    mayor: {
        "C": ["C", "D", "E", "F", "G", "A", "B"],
        "C#": ["C#", "D#", "E#", "F#", "G#", "A#", "B#"],
        "Db": ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"],
        "D": ["D", "E", "F#", "G", "A", "B", "C#"],
        "D#": ["D#", "E#", "F##", "G#", "A#", "B#", "C##"],
        "Eb": ["Eb", "F", "G", "Ab", "Bb", "C", "D"],
        "E": ["E", "F#", "G#", "A", "B", "C#", "D#"],
        "F": ["F", "G", "A", "Bb", "C", "D", "E"],
        "F#": ["F#", "G#", "A#", "B", "C#", "D#", "E#"],
        "Gb": ["Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F"],
        "G": ["G", "A", "B", "C", "D", "E", "F#"],
        "G#": ["G#", "A#", "B#", "C#", "D#", "E#", "F##"],
        "Ab": ["Ab", "Bb", "C", "Db", "Eb", "F", "G"],
        "A": ["A", "B", "C#", "D", "E", "F#", "G#"],
        "A#": ["A#", "B#", "C##", "D#", "E#", "F##", "G##"],
        "Bb": ["Bb", "C", "D", "Eb", "F", "G", "A"],
        "B": ["B", "C#", "D#", "E", "F#", "G#", "A#"]
    },
    menorNatural: {
        "C": ["C", "D", "Eb", "F", "G", "Ab", "Bb"],
        "C#": ["C#", "D#", "E", "F#", "G#", "A", "B"],
        "Db": ["Db", "Eb", "Fb", "Gb", "Ab", "Bbb", "Cb"],
        "D": ["D", "E", "F", "G", "A", "Bb", "C"],
        "D#": ["D#", "E#", "F#", "G#", "A#", "B", "C#"],
        "Eb": ["Eb", "F", "Gb", "Ab", "Bb", "Cb", "Db"],
        "E": ["E", "F#", "G", "A", "B", "C", "D"],
        "F": ["F", "G", "Ab", "Bb", "C", "Db", "Eb"],
        "F#": ["F#", "G#", "A", "B", "C#", "D", "E"],
        "Gb": ["Gb", "Ab", "Bbb", "Cb", "Db", "Ebb", "Fb"],
        "G": ["G", "A", "Bb", "C", "D", "Eb", "F"],
        "G#": ["G#", "A#", "B", "C#", "D#", "E", "F#"],
        "Ab": ["Ab", "Bb", "Cb", "Db", "Eb", "Fb", "Gb"],
        "A": ["A", "B", "C", "D", "E", "F", "G"],
        "A#": ["A#", "B#", "C#", "D#", "E#", "F#", "G#"],
        "Bb": ["Bb", "C", "Db", "Eb", "F", "Gb", "Ab"],
        "B": ["B", "C#", "D", "E", "F#", "G", "A"]
    },
    menorArmonica: {
        "C": ["C", "D", "Eb", "F", "G", "Ab", "B"],
        "C#": ["C#", "D#", "E", "F#", "G#", "A", "B#"],
        "Db": ["Db", "Eb", "Fb", "Gb", "Ab", "Bbb", "C"],
        "D": ["D", "E", "F", "G", "A", "Bb", "C#"],
        "D#": ["D#", "E#", "F#", "G#", "A#", "B", "C##"],
        "Eb": ["Eb", "F", "Gb", "Ab", "Bb", "Cb", "D"],
        "E": ["E", "F#", "G", "A", "B", "C", "D#"],
        "F": ["F", "G", "Ab", "Bb", "C", "Db", "E"],
        "F#": ["F#", "G#", "A", "B", "C#", "D", "E#"],
        "Gb": ["Gb", "Ab", "Bbb", "Cb", "Db", "Ebb", "F"],
        "G": ["G", "A", "Bb", "C", "D", "Eb", "F#"],
        "G#": ["G#", "A#", "B", "C#", "D#", "E", "G"],
        "Ab": ["Ab", "Bb", "Cb", "Db", "Eb", "Fb", "G"],
        "A": ["A", "B", "C", "D", "E", "F", "G#"],
        "A#": ["A#", "B#", "C#", "D#", "E#", "F#", "G##"],
        "Bb": ["Bb", "C", "Db", "Eb", "F", "Gb", "A"],
        "B": ["B", "C#", "D", "E", "F#", "G", "A#"]
    },
    menorMelodica: {
        "C": ["C", "D", "Eb", "F", "G", "A", "B"],
        "C#": ["C#", "D#", "E", "F#", "G#", "A#", "B#"],
        "Db": ["Db", "Eb", "Fb", "Gb", "Ab", "Bb", "C"],
        "D": ["D", "E", "F", "G", "A", "B", "C#"],
        "D#": ["D#", "E#", "F#", "G#", "A#", "B#", "C##"],
        "Eb": ["Eb", "F", "Gb", "Ab", "Bb", "C", "D"],
        "E": ["E", "F#", "G", "A", "B", "C#", "D#"],
        "F": ["F", "G", "Ab", "Bb", "C", "D", "E"],
        "F#": ["F#", "G#", "A", "B", "C#", "D#", "E#"],
        "Gb": ["Gb", "Ab", "Bbb", "Cb", "Db", "Eb", "F"],
        "G": ["G", "A", "Bb", "C", "D", "E", "F#"],
        "G#": ["G#", "A#", "B", "C#", "D#", "E#", "F##"],
        "Ab": ["Ab", "Bb", "Cb", "Db", "Eb", "F", "G"],
        "A": ["A", "B", "C", "D", "E", "F#", "G#"],
        "A#": ["A#", "B#", "C#", "D#", "E#", "F##", "G##"],
        "Bb": ["Bb", "C", "Db", "Eb", "F", "G", "A"],
        "B": ["B", "C#", "D", "E", "F#", "G#", "A#"]
    }
};

    let resultado = escalas[tipoEscala][tonica] || "Nota tónica no válida";
    document.getElementById("resultado").innerText = Array.isArray(resultado) ? resultado.join(", ") : resultado;
}
