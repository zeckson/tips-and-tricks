#!/bin/bash
set -euo pipefail
IFS=$'\n\t'

echo 'Привет! Сейчас мы немного поиграем с консолью'
read -p "Нажмите enter для продолжения..."

echo 'Сейчас мы находимся в '"$(pwd)"
echo "Создаю: ~/develop/nodeschool"
mkdir -p ~/develop/nodeschool
cd ~/develop/nodeschool
ls -la
echo "Создаю подкаталог: ~/develop/nodeschool/shell"
mkdir shell || true
cd shell
echo 'Сейчас мы находимся в '"$(pwd)"
echo 'Всё готов для продолжения'
read -p "Нажмите enter для продолжения..."

echo 'Качаю старую конституцию'
curl https://raw.githubusercontent.com/miripiruni/constitution-of-russia/master/constitution.txt > constitution-old.txt 2> error.log
echo 'Статистика:'
cat error.log
echo 'Текст:'
more constitution-old.txt

# Найдём интересующее слово в конституции
grep -i "член" < constitution-old.txt > /dev/null

grep -io "член" < constitution-old.txt > /dev/null
FOUND=$(grep -io "член" < constitution-old.txt | wc -w)
clear

echo "Найдено $FOUND вхождений слова \"член\" в старой конституции"
read -p "Нажмите enter для продолжения..."

echo 'Качаю новую конституцию'
curl https://raw.githubusercontent.com/miripiruni/constitution-of-russia/2020-03-11/constitution.txt > constitution-new.txt

grep -i "член" < constitution-new.txt > /dev/null
FOUND=$(grep -io "член" < constitution-new.txt | wc -w)

echo "Найдено $FOUND вхождений слова \"член\" в новой конституции"
read -p "Нажмите enter для продолжения..."

echo "Meняю всех членов на стенаторов"
sed "s/член/сенатор/g" constitution-new.txt > constitution-new-updated.txt
echo "Новые изменения от $(date) вступят в силу как только все проголосуют"
echo "С текстом можно ознакомиться в файле constitution-new-updated.txt"
read -p "Нажмите enter для продолжения..."

diff constitution-new.txt constitution-new-updated.txt
vimdiff constitution-new.txt constitution-new-updated.txt
