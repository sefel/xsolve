angular.module('exam', ['ui.router', 'exam.modules', 'directives.nav'])
        .run(
                ['$state', 
                    function($state) {
                       
                        $state.transitionTo('main');

                    }]);

/*
 * 
 * 1. Zadanie rekrutacyjne angular.js:

Korzystając z biblioteki ui-router, stwórz aplikację, która spełni następujące założenia:
- interfejs będzie podzielony na dwa widoki: menu i content:
- menu pozostanie statyczne i będzie prezentowało zakładki do kilku dowolnych treści,
- content będzie prezentował zawartość poszczególnych zakładek,
- treść ładowana ma być z dowolnego ogólnie dostępnego api (np. http://jsonplaceholder.typicode.com/) i przynajmniej jedna zaprezentowana w postaci tabelki,
- treść w tabelce powinna być podzielona na strony, gdzie możliwa powinna być zmiana ilości elementów na stronie i wybór strony,
- ilość elementów na stronie tabeli powinna być zapisywana w localStorage,
- wszystkie odpowiedzi api powinny być sprawdzone pod kątem błędów http i jeśli takie wystąpią należy wyświetlić komunikat z jego statusem i treścią.
 * 
 * 
 */