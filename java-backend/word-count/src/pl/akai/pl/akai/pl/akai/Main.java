import java.util.HashMap;
import java.util.Map;

public class Main {

    private static String[] sentences = {
            "Taki mamy klimat",
            "Wszędzie dobrze ale w domu najlepiej",
            "Wyskoczył jak Filip z konopii",
            "Gdzie kucharek sześć tam nie ma co jeść",
            "Nie ma to jak w domu",
            "Konduktorze łaskawy zabierz nas do Warszawy",
            "Jeżeli nie zjesz obiadu to nie dostaniesz deseru",
            "Bez pracy nie ma kołaczy",
            "Kto sieje wiatr ten zbiera burzę",
            "Być szybkim jak wiatr",
            "Kopać pod kimś dołki",
            "Gdzie raki zimują",
            "Gdzie pieprz rośnie",
            "Swoją drogą to gdzie rośnie pieprz?",
            "Mam nadzieję, że poradzisz sobie z tym zadaniem bez problemu",
            "Nie powinno sprawić żadnego problemu, bo Google jest dozwolony"
    };

    public static void main(String[] args) {
        HashMap<String, Integer> wordMap = new HashMap<>();
        for (String sentence : sentences) {
            String word = "";
            for (char c : sentence.toLowerCase().toCharArray()) {
                if (!Character.isLetter(c)) {
                    if (wordMap.keySet().contains(word))
                        wordMap.replace(word, wordMap.get(word) + 1);
                    else if (word != "")
                        wordMap.putIfAbsent(word, 1);

                    word = "";
                } else {
                    word += c;
                }
            }
        }

        for (int i = 0; i < 3; i++) {
            System.out.println(wordMap.entrySet().stream().max(Map.Entry.comparingByValue()).get()
                    .getKey() + " " + wordMap.entrySet().stream().max(Map.Entry.comparingByValue()).get().getValue());

            wordMap.remove(wordMap.entrySet().stream().max(Map.Entry.comparingByValue()).get().getKey());
        }
        
    }

}
