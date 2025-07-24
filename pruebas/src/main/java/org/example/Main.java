package org.example;

import java.util.HashMap;
import java.util.Locale;
import java.util.Stack;



public class Main {
    public static void main(String[] args) {



    String pal = "programador";
    System.out.println(contadorPalabra(pal));

    }//main


    public static HashMap<Character,Integer> contadorPalabra(String str){
        String palabra = "";
        HashMap <Character,Integer> contador = new HashMap<>();
        palabra = str.toLowerCase();

        for(int i = 0; i <= palabra.length(); i++){

            System.out.println(palabra.contains(str));






        }


        return contador;
    }



    }




//fin main

