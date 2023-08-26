---
title: My Initial Setup Routine With MAC After Reset
date: '2023-08-19'
description: 'M1 맥 초기화 이후 초기 세팅 정리'
category: 'Etc'
---

> **주기적인 Mac 포맷**으로 이후에 초기 세팅을 재확인할 때 **잊게 되는 항목들**이 있어 이렇게 작성하게 되었습니다. 혼자 보는 것을 **공유**하게 되면, 다른 분들에게도 훌륭한 앱이나 설정들을 사용할 수 있게 할 수 있다고 생각합니다. 주로 작업에 필요한 **Tool** 설치와 **Mac** 세팅에 대한 내용이 담겨 있습니다.

> 현재 **Laptop** 은 **M1 pro**를 사용하고 있습니다. 현재 **MAC OS**는 **Ventura**를 사용하고 있습니다.

<br/>

## 1. MAC 키보드 설정

⌨️ 키보드 ➡️ 키 반복 '**빠르게**' 로 변경

🚣🏻‍♀️ 트랙패드 ➡️ **Scroll & Zoom** 항목에서 **Natural Scrolling** (자연스럽게) **체크 해제**

<br/>

## 2. 효율성 애플리케이션 설치

- **Magnet** [ AppStore ]
- **Bandizip** [ AppStore ]
- Coconutbattery : https://www.coconut-flavour.com/coconutbattery/
- **Appcleaner** : https://freemacsoft.net/appcleaner/
- Aldente : https://apphousekitchen.com/
- **Raycast** : https://www.raycast.com/
- **Colorslurp** [ AppStore ]
- Gifski [AppStore] === gif generator
- Onedrive
- **Slack**
- DeepL

<br/>

## 3. Chrome 브라우저 설치

- 다운로드
- 크롬 로그인
- 크롬 동기화
- 크롬 기본 앱으로 설정: 시스템 환경설정 ➡️ 일반 ➡️ 기본 웹 브라우저 ➡️ 크롬 선택

<br/>

## 4. Iterm2 & Homebrew & Oh My Zsh & Git 설치

- **Iterm2** 설치 : https://iterm2.com/
- **Homebrew** 설치 : https://brew.sh/index_ko

  - `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

- **Zsh & Oh My Zsh** 설치 : https://ohmyz.sh/#install
  - **Zsh** 설치
    - `brew install zsh`
    - 간혹 m1 맥에서 homebrew 설치 후 brew를 command에서 못찾는 경우 다음과 같이 해결합니다. ➡️ Error 발생 형태 `zsh: command not found: brew`
      - **iterm2** 또는 **terminal** 앱을 열고 `vi ~/.zshrc` 명령어 입력 후 vi 에디터로 이동합니다.
      - 입력 가능하게 하기 위해서 `i`를 키보드에서 입력하고, `export PATH=/opt/homebrew/bin:$PATH` 명령어를 추가합니다.
      - 저장하고 종료하기 위해 `Esc` 키 입력 후, `:wq!` 를 입력하고 `Enter` 입력 후 종료합니다.
      - 저장한 상태를 실행, 그리고 홈 디렉토리의 `.zshrc` 로 설정해 zsh shell이 brew command를 찾아 실행하도록 하기 위하여 `source ~/.zshrc` 를 입력하고 `Enter`를 입력하면 이제 brew를 command에서 찾게 됩니다!
  - **oh-my-zsh** 설치
    - `sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"`
    - spaceship 테마 설치
      - 링크 ➡️ https://github.com/spaceship-prompt/spaceship-prompt
      - Clone repo ➡️ `git clone https://github.com/spaceship-prompt/spaceship-prompt.git "$ZSH_CUSTOM/themes/spaceship-prompt" --depth=1`
      - Symlink spaceship.zsh-theme to your oh-my-zsh custom themes directory ➡️ `ln -s "$ZSH_CUSTOM/themes/spaceship-prompt/spaceship.zsh-theme" "$ZSH_CUSTOM/themes/spaceship.zsh-theme"`
- **Git** 설치

  - git 설정값 확인 : `git config --list`
  - git 기존 브랜치 `main` branch로 설정 : `git config --global init.defaultbranch main`
  - git **이메일** 설정 : `git config --global user.email <이메일>`
  - git **사용자명** 설정 : `git config --global user.name <사용자 이름>`
  - 현재 이메일, 사용자명 확인 : `git config user.email`, `git config user.name`

  - 터미널 또는 iterm에서 명령어로 **vscode** 여는 설정
    - `vi ~/.zshrc`
    - 위의 brew command 명령어를 못찾는 문제에서 설명할 때처럼 `i`를 키보드에서 입력하고, 입력 상태에서 제일 하단에 `code () { VSCODE_CWD="$PWD" open -n -b "com.microsoft.VSCode" --args $* ;}`를 삽입하고 저장합니다.
    - 저장한 상태를 실행하기 위해 `source ~/.zshrc ` 실행

<br/>

## 5. VSCode 및 플러그인 설치

### 플러그인 종류

- **Auto Rename Tag** ☕️
- Code Spell Checker
- CodeSnap
- **CSS Peek** ☕️
- **ESLint** ☕️☕️☕️
- Git Graph
- Gitmoji
- **HTML CSS Support** ☕️
- Korean Language Pack for VS Code
- **Live Server** ☕️☕️☕️
- **Code Runner** ☕️☕️
- Markdown All in One
- Material Icon Theme
- **Night Owl (Theme)** ☕️☕️☕️
- Path Intellisense
- **Prettier - Code Formatter** ☕️☕️☕️
- **REST Client** ☕️
- Sass(.sass only)
- Tailwind CSS IntelliSense
- vscode-styled-components

> **강조된** 부분은 필수로 설치

<br/>

## 6. 사용할 Font 추가

- **Dank Mono** : https://philpl.gumroad.com/l/dank-mono ☕️☕️☕️
- **D2Coding** : https://github.com/naver/d2codingfont ☕️☕️
- **Noto Sans KR** ☕️☕️
- DM Mono
- IBM Plex Mono
- Inter
- **JetBrains Mono** : https://www.jetbrains.com/lp/mono/ ☕️
- Nunito Sans
- Open Arrow : https://yeun.github.io/open-arrow/
- **Poppins**
- **Pretendard** : https://github.com/orioncactus/pretendard/releases/tag/v1.3.6 ☕️☕️
- Schibsted Grotesk
- Space Grotesk
- **Spoqa Han Sans Neo** ☕️☕️

> 나머지는 **Google Fonts**에서 Family 파일로 Local 설치

<br/>

## 7. Design & Writing Tools 설치

- **Figma** ☕️☕️☕️
- **Photoshop** ☕️☕️
- Sketchup
- Pages / Numbers / Keynote
- MS Office
- **Notion** ☕️☕️☕️
- **Obsidion** ☕️☕️

<br/>
