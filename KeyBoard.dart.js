import 'package:flutter/material.dart';

final headerBackground = Colors.black;
final borderColor = Colors.grey;
final mainColor = Colors.yellow;
final shadedColor = Colors.teal;

void main() {
  runApp(
    MaterialApp(home: MyWidget(), debugShowCheckedModeBanner: false),
  );
}

class MyWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
        appBar: new AppBar(
          backgroundColor: headerBackground,
          title: Text("Typing Tutor"),
        ),
        body: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                crossAxisAlignment: CrossAxisAlignment.center,
                //ROW 1
                children: [
                  Container(
                    padding: const EdgeInsets.all(6),
                    margin: EdgeInsets.all(1.0),
                    alignment: Alignment.center,
                    width: 50,
                    height: 50,
                    decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(3),
                        boxShadow: [
                          BoxShadow(
                              color: borderColor,
                              blurRadius: 5,
                              offset: Offset(2.0, 5.0))
                        ],
                        color: mainColor,
                        gradient: LinearGradient(
                          colors: [shadedColor, mainColor],
                        )),
                    child: Text("~"),
                  ),
                  Container(
                    padding: const EdgeInsets.all(6),
                    margin: EdgeInsets.all(1.0),
                    alignment: Alignment.center,
                    width: 50,
                    height: 50,
                    decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(3),
                        boxShadow: [
                          BoxShadow(
                              color: borderColor,
                              blurRadius: 5,
                              offset: Offset(2.0, 5.0))
                        ],
                        color: mainColor,
                        gradient: LinearGradient(
                          colors: [shadedColor, mainColor],
                        )),
                    child: Text("1"),
                  ),
                  Container(
                    padding: const EdgeInsets.all(6),
                    margin: EdgeInsets.all(1.0),
                    alignment: Alignment.center,
                    width: 50,
                    height: 50,
                    decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(3),
                        boxShadow: [
                          BoxShadow(
                              color: borderColor,
                              blurRadius: 5,
                              offset: Offset(2.0, 5.0))
                        ],
                        color: mainColor,
                        gradient: LinearGradient(
                          colors: [shadedColor, mainColor],
                        )),
                    child: Text("2"),
                  ),
                  Container(
                    padding: const EdgeInsets.all(6),
                    margin: EdgeInsets.all(1.0),
                    alignment: Alignment.center,
                    width: 50,
                    height: 50,
                    decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(3),
                        boxShadow: [
                          BoxShadow(
                              color: borderColor,
                              blurRadius: 5,
                              offset: Offset(2.0, 5.0))
                        ],
                        color: mainColor,
                        gradient: LinearGradient(
                          colors: [shadedColor, mainColor],
                        )),
                    child: Text("3"),
                  ),
                  Container(
                    padding: const EdgeInsets.all(6),
                    margin: EdgeInsets.all(1.0),
                    alignment: Alignment.center,
                    width: 50,
                    height: 50,
                    decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(3),
                        boxShadow: [
                          BoxShadow(
                              color: borderColor,
                              blurRadius: 5,
                              offset: Offset(2.0, 5.0))
                        ],
                        color: mainColor,
                        gradient: LinearGradient(
                          colors: [shadedColor, mainColor],
                        )),
                    child: Text("4"),
                  ),
                  Container(
                    padding: const EdgeInsets.all(6),
                    margin: EdgeInsets.all(1.0),
                    alignment: Alignment.center,
                    width: 50,
                    height: 50,
                    decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(3),
                        boxShadow: [
                          BoxShadow(
                              color: borderColor,
                              blurRadius: 5,
                              offset: Offset(2.0, 5.0))
                        ],
                        color: mainColor,
                        gradient: LinearGradient(
                          colors: [shadedColor, mainColor],
                        )),
                    child: Text("5"),
                  ),
                  Container(
                    padding: const EdgeInsets.all(6),
                    margin: EdgeInsets.all(1.0),
                    alignment: Alignment.center,
                    width: 50,
                    height: 50,
                    decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(3),
                        boxShadow: [
                          BoxShadow(
                              color: borderColor,
                              blurRadius: 5,
                              offset: Offset(2.0, 5.0))
                        ],
                        color: mainColor,
                        gradient: LinearGradient(
                          colors: [shadedColor, mainColor],
                        )),
                    child: Text("6"),
                  ),
                  Container(
                    padding: const EdgeInsets.all(6),
                    margin: EdgeInsets.all(1.0),
                    alignment: Alignment.center,
                    width: 50,
                    height: 50,
                    decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(3),
                        boxShadow: [
                          BoxShadow(
                              color: borderColor,
                              blurRadius: 5,
                              offset: Offset(2.0, 5.0))
                        ],
                        color: mainColor,
                        gradient: LinearGradient(
                          colors: [shadedColor, mainColor],
                        )),
                    child: Text("7"),
                  ),
                  Container(
                    padding: const EdgeInsets.all(6),
                    margin: EdgeInsets.all(1.0),
                    alignment: Alignment.center,
                    width: 50,
                    height: 50,
                    decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(3),
                        boxShadow: [
                          BoxShadow(
                              color: borderColor,
                              blurRadius: 5,
                              offset: Offset(2.0, 5.0))
                        ],
                        color: mainColor,
                        gradient: LinearGradient(
                          colors: [shadedColor, mainColor],
                        )),
                    child: Text("8"),
                  ),
                  Container(
                    padding: const EdgeInsets.all(6),
                    margin: EdgeInsets.all(1.0),
                    alignment: Alignment.center,
                    width: 50,
                    height: 50,
                    decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(3),
                        boxShadow: [
                          BoxShadow(
                              color: borderColor,
                              blurRadius: 5,
                              offset: Offset(2.0, 5.0))
                        ],
                        color: mainColor,
                        gradient: LinearGradient(
                          colors: [shadedColor, mainColor],
                        )),
                    child: Text("9"),
                  ),
                  Container(
                    padding: const EdgeInsets.all(6),
                    margin: EdgeInsets.all(1.0),
                    alignment: Alignment.center,
                    width: 50,
                    height: 50,
                    decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(3),
                        boxShadow: [
                          BoxShadow(
                              color: borderColor,
                              blurRadius: 5,
                              offset: Offset(2.0, 5.0))
                        ],
                        color: mainColor,
                        gradient: LinearGradient(
                          colors: [shadedColor, mainColor],
                        )),
                    child: Text("0"),
                  ),
                  Container(
                    padding: const EdgeInsets.all(6),
                    margin: EdgeInsets.all(1.0),
                    alignment: Alignment.center,
                    width: 50,
                    height: 50,
                    decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(3),
                        boxShadow: [
                          BoxShadow(
                              color: borderColor,
                              blurRadius: 5,
                              offset: Offset(2.0, 5.0))
                        ],
                        color: mainColor,
                        gradient: LinearGradient(
                          colors: [shadedColor, mainColor],
                        )),
                    child: Text("-_"),
                  ),
                  Container(
                    padding: const EdgeInsets.all(6),
                    margin: EdgeInsets.all(1.0),
                    alignment: Alignment.center,
                    width: 50,
                    height: 50,
                    decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(3),
                        boxShadow: [
                          BoxShadow(
                              color: borderColor,
                              blurRadius: 5,
                              offset: Offset(2.0, 5.0))
                        ],
                        color: mainColor,
                        gradient: LinearGradient(
                          colors: [shadedColor, mainColor],
                        )),
                    child: Text("+="),
                  ),
                  Container(
                    padding: const EdgeInsets.all(6),
                    margin: EdgeInsets.all(1.0),
                    alignment: Alignment.center,
                    width: 80,
                    height: 50,
                    decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(3),
                        boxShadow: [
                          BoxShadow(
                              color: borderColor,
                              blurRadius: 5,
                              offset: Offset(2.0, 5.0))
                        ],
                        color: mainColor,
                        gradient: LinearGradient(
                          colors: [shadedColor, mainColor],
                        )),
                    child: Text("backspace"),
                  ),
                  Container(
                    padding: const EdgeInsets.all(6),
                    margin: EdgeInsets.all(1.0),
                    alignment: Alignment.center,
                    width: 50,
                    height: 50,
                    decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(3),
                        boxShadow: [
                          BoxShadow(
                              color: borderColor,
                              blurRadius: 5,
                              offset: Offset(2.0, 5.0))
                        ],
                        color: mainColor,
                        gradient: LinearGradient(
                          colors: [shadedColor, mainColor],
                        )),
                    child: Text("del"),
                  ),
                ],
              ),
              Row(
                  //ROW 2
                  mainAxisAlignment: MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 80,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Text("tab"),
                    ),
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 50,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Text("Q"),
                    ),
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 50,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Text("W"),
                    ),
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 50,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Text("E"),
                    ),
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 50,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Text("R"),
                    ),
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 50,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Text("T"),
                    ),
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 50,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Text("Y"),
                    ),
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 50,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Text("U"),
                    ),
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 50,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Text("I"),
                    ),
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 50,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Text("O"),
                    ),
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 50,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Text("P"),
                    ),
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 50,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Text("{["),
                    ),
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 50,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Text("]}"),
                    ),
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 50,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Text("|\\"),
                    ),
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 50,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Text("home"),
                    ),
                  ]),
              Row(
                  // ROW 3
                  mainAxisAlignment: MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 90,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Text("caps lock"),
                    ),
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 50,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Text("A"),
                    ),
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 50,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Text("S"),
                    ),
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 50,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Text("D"),
                    ),
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 50,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Text("F"),
                    ),
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 50,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Text("G"),
                    ),
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 50,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Text("H"),
                    ),
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 50,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Text("J"),
                    ),
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 50,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Text("K"),
                    ),
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 50,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Text("L"),
                    ),
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 50,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Text(":;"),
                    ),
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 50,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Text(","),
                    ),
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 92,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Text("enter"),
                    ),
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 50,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Text("pg up"),
                    ),
                  ]),
              Row(
                  // ROW 4
                  mainAxisAlignment: MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 115,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Text("shift"),
                    ),
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 50,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Text("Z"),
                    ),
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 50,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Text("X"),
                    ),
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 50,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Text("C"),
                    ),
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 50,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Text("V"),
                    ),
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 50,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Text("B"),
                    ),
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 50,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Text("N"),
                    ),
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 50,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Text("M"),
                    ),
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 50,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Text("<,"),
                    ),
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 50,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Text(">."),
                    ),
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 50,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Text("?"),
                    ),
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 120,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Text("shift"),
                    ),
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 50,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Text("pg dn"),
                    ),
                  ]),
              Row(
                  // ROW 5
                  mainAxisAlignment: MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 62,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Text("ctrl"),
                    ),
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 50,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Text("fn"),
                    ),
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 50,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Image.network(
                          "https://imagesflutter.s3-ap-southeast-1.amazonaws.com/windows-brands.svg",
                          width: 20,
                          height: 20,
                          fit: BoxFit.fill),
                    ),
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 90,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Text("alt"),
                    ),
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 340,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Text("space bar"),
                    ),
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 90,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Text("alt"),
                    ),
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 62,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Text("ctrl"),
                    ),
                    Container(
                      padding: const EdgeInsets.all(6),
                      margin: EdgeInsets.all(1.0),
                      alignment: Alignment.center,
                      width: 50,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          boxShadow: [
                            BoxShadow(
                                color: borderColor,
                                blurRadius: 5,
                                offset: Offset(2.0, 5.0))
                          ],
                          color: mainColor,
                          gradient: LinearGradient(
                            colors: [shadedColor, mainColor],
                          )),
                      child: Text("end"),
                    ),
                  ]),
            ]));
  }
}
