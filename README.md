# AHORCADO

## Letters

- Encargada de renderizar todas las letras del alfabeto.
- Encargada de registrar la acción RECIBIDA mediante un onClick.

## UseLetters

- Encargada de renderizar todas aquellas letras que ya se han RECIBIDO previamente.

## GuessLetters

- Encargada de renderizar todas aquellas letras RECIBIDAS que han coindicido con la palabra RECIBIDA.

## Hangman

- Encargado de renderizar el "hangman".
- Será el encargado de mostrar todos aquellos cambios en su stage como letra fallada RECIBA.

## Result

- Encargado de renderizar un texto RECIBIDO.

## App

- Encargada de renderizar Letters, UseLeters, GuessLetters, Hangman y Result.
- Encargada de GENERAR una palabra rándom.
- Encargada de recorrer el alfabeto y dar esta información a las funciones que necesitamos.
- Encargada de ENVIAR la acción de trasladar la letra seleccionada a UsedLetters.
- Encargada de ENVIAR la acción de modificar los cambios del stage de Hangman cuando la letra seleccionada no se encuentre en la palabra.
- Encargada de ENVIAR la acción de añadir la letra seleccionada a GuessLetters cuando esta se encuentre en la palabra.
