// Created by @Sam-Scratch-Project https://scratch.mit.edu/users/sam-scratch-project/

(function (Scratch) {
    'use strict';
    const icon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIzNzYuODY0ODYiIGhlaWdodD0iMzUzLjMxMDgxIiB2aWV3Qm94PSIwLDAsMzc2Ljg2NDg2LDM1My4zMTA4MSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUxLjU2NzU3LC0zLjM0NDU5KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsPSIjMDEwMTAxIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTMzNi41NjI3OSwzNDkuNTkzNjFjNS4xOTgwOSwzLjg4Nzg5IDQuMTQwMzYsNy4wNjE4IC0yLjM0NjU3LDcuMDYxOGgtMTQxLjMyNDMyYy02LjQ4NjkzLDAgLTcuNTQ0NjYsLTMuMTc0NjQgLTIuMzQ2NTcsLTcuMDYxOGwyOC4yNDY0NiwtMjEuMjA4MjJjNS4xOTg4MiwtMy44ODY0MiA5LjQzMTE5LC0xMi4zNTExNiA5LjQzMTE5LC0xOC44MzgwOXYtMTEuNzc3MDNjMCwtNi40ODY5MyA1LjI5MDgzLC0xMS43NzcwMyAxMS43NzcwMywtMTEuNzc3MDNoNDcuMTA4MTFjNi40ODY5MywwIDExLjc3NzAzLDUuMjkwODMgMTEuNzc3MDMsMTEuNzc3MDN2MTEuNzc3MDNjMCw2LjQ4NjkzIDQuMjMyMzcsMTQuOTUxNjcgOS40MzExOSwxOC44Mzg4M3pNNDI4LjQzMjQzLDI2Ljg5ODY1djIyMy43NjM1MWMwLDEzLjAxOTUgLTEwLjUzNTI5LDIzLjU1NDA1IC0yMy41NTQwNSwyMy41NTQwNWgtMjM1LjU0MDU0djU4Ljg4NTE0YzAsMTMuMDE5NSAtMTAuNTQ2MzMsMjMuNTU0MDUgLTIzLjU1NDA1LDIzLjU1NDA1aC03MC42NjIxNmMtMTMuMDA3NzMsMCAtMjMuNTU0MDUsLTEwLjUzNTI5IC0yMy41NTQwNSwtMjMuNTU0MDV2LTI1OS4wOTQ1OWMwLC0xMy4wMDc3MyAxMC41NDYzMywtMjMuNTU0MDUgMjMuNTU0MDUsLTIzLjU1NDA1aDIzLjU1NDA1di0yMy41NTQwNWMwLC0xMy4wMDc3MyAxMC41MzUyOSwtMjMuNTU0MDUgMjMuNTU0MDUsLTIzLjU1NDA1aDI4Mi42NDg2NWMxMy4wMTk1LDAgMjMuNTU0MDUsMTAuNTQ2MzMgMjMuNTU0MDUsMjMuNTU0MDV6TTc1LjEyMTYyLDk3LjU2MDgxaDcwLjY2MjE2di0yMy41NTQwNWgtNzAuNjYyMTZ6TTc1LjEyMTYyLDE0NC42Njg5Mmg3MC42NjIxNnYtMjMuNTU0MDVoLTcwLjY2MjE2ek05OC42NzU2OCwyNzQuMjE2MjJjMCwtNi41MDk3NSAtNS4yNjcyOCwtMTEuNzc3MDMgLTExLjc3NzAzLC0xMS43NzcwM2MtNi41MDk3NSwwIC0xMS43NzcwMyw1LjI2NzI4IC0xMS43NzcwMywxMS43NzcwM2MwLDYuNTA5NzUgNS4yNjcyOCwxMS43NzcwMyAxMS43NzcwMywxMS43NzcwM2M2LjUwOTc1LDAgMTEuNzc3MDMsLTUuMjY3MjggMTEuNzc3MDMsLTExLjc3NzAzek00MDQuODc4MzgsNTAuNDUyN2MwLC0xMy4wMTk1IC0xMC41MzUyOSwtMjMuNTU0MDUgLTIzLjU1NDA1LC0yMy41NTQwNWgtMjM1LjU0MDU0Yy0xMy4wMTk1LDAgLTIzLjU1NDA1LDEwLjUzNTI5IC0yMy41NTQwNSwyMy41NTQwNWgyMy41NTQwNWMxMy4wMDc3MywwIDIzLjU1NDA1LDEwLjU0NjMzIDIzLjU1NDA1LDIzLjU1NDA1djE2NC44NzgzOGgyMTEuOTg2NDljMTMuMDE5NSwwIDIzLjU1NDA1LC0xMC41MzUyOSAyMy41NTQwNSwtMjMuNTU0MDV6Ii8+PC9nPjwvZz48L3N2Zz4=';
    const icon2 = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIzNzYuODY0ODYiIGhlaWdodD0iMzUzLjMxMDgxIiB2aWV3Qm94PSIwLDAsMzc2Ljg2NDg2LDM1My4zMTA4MSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUxLjU2NzU3LC0zLjM0NDU5KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsPSIjMDEwMTAxIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTMzNi41NjI3OSwzNDkuNTkzNjFjNS4xOTgwOSwzLjg4Nzg5IDQuMTQwMzYsNy4wNjE4IC0yLjM0NjU3LDcuMDYxOGgtMTQxLjMyNDMyYy02LjQ4NjkzLDAgLTcuNTQ0NjYsLTMuMTc0NjQgLTIuMzQ2NTcsLTcuMDYxOGwyOC4yNDY0NiwtMjEuMjA4MjJjNS4xOTg4MiwtMy44ODY0MiA5LjQzMTE5LC0xMi4zNTExNiA5LjQzMTE5LC0xOC44MzgwOXYtMTEuNzc3MDNjMCwtNi40ODY5MyA1LjI5MDgzLC0xMS43NzcwMyAxMS43NzcwMywtMTEuNzc3MDNoNDcuMTA4MTFjNi40ODY5MywwIDExLjc3NzAzLDUuMjkwODMgMTEuNzc3MDMsMTEuNzc3MDN2MTEuNzc3MDNjMCw2LjQ4NjkzIDQuMjMyMzcsMTQuOTUxNjcgOS40MzExOSwxOC44Mzg4M3pNNDI4LjQzMjQzLDI2Ljg5ODY1djIyMy43NjM1MWMwLDEzLjAxOTUgLTEwLjUzNTI5LDIzLjU1NDA1IC0yMy41NTQwNSwyMy41NTQwNWgtMjM1LjU0MDU0djU4Ljg4NTE0YzAsMTMuMDE5NSAtMTAuNTQ2MzMsMjMuNTU0MDUgLTIzLjU1NDA1LDIzLjU1NDA1aC03MC42NjIxNmMtMTMuMDA3NzMsMCAtMjMuNTU0MDUsLTEwLjUzNTI5IC0yMy41NTQwNSwtMjMuNTU0MDV2LTI1OS4wOTQ1OWMwLC0xMy4wMDc3MyAxMC41NDYzMywtMjMuNTU0MDUgMjMuNTU0MDUsLTIzLjU1NDA1aDIzLjU1NDA1di0yMy41NTQwNWMwLC0xMy4wMDc3MyAxMC41MzUyOSwtMjMuNTU0MDUgMjMuNTU0MDUsLTIzLjU1NDA1aDI4Mi42NDg2NWMxMy4wMTk1LDAgMjMuNTU0MDUsMTAuNTQ2MzMgMjMuNTU0MDUsMjMuNTU0MDV6TTc1LjEyMTYyLDk3LjU2MDgxaDcwLjY2MjE2di0yMy41NTQwNWgtNzAuNjYyMTZ6TTc1LjEyMTYyLDE0NC42Njg5Mmg3MC42NjIxNnYtMjMuNTU0MDVoLTcwLjY2MjE2ek05OC42NzU2OCwyNzQuMjE2MjJjMCwtNi41MDk3NSAtNS4yNjcyOCwtMTEuNzc3MDMgLTExLjc3NzAzLC0xMS43NzcwM2MtNi41MDk3NSwwIC0xMS43NzcwMyw1LjI2NzI4IC0xMS43NzcwMywxMS43NzcwM2MwLDYuNTA5NzUgNS4yNjcyOCwxMS43NzcwMyAxMS43NzcwMywxMS43NzcwM2M2LjUwOTc1LDAgMTEuNzc3MDMsLTUuMjY3MjggMTEuNzc3MDMsLTExLjc3NzAzek00MDQuODc4MzgsNTAuNDUyN2MwLC0xMy4wMTk1IC0xMC41MzUyOSwtMjMuNTU0MDUgLTIzLjU1NDA1LC0yMy41NTQwNWgtMjM1LjU0MDU0Yy0xMy4wMTk1LDAgLTIzLjU1NDA1LDEwLjUzNTI5IC0yMy41NTQwNSwyMy41NTQwNWgyMy41NTQwNWMxMy4wMDc3MywwIDIzLjU1NDA1LDEwLjU0NjMzIDIzLjU1NDA1LDIzLjU1NDA1djE2NC44NzgzOGgyMTEuOTg2NDljMTMuMDE5NSwwIDIzLjU1NDA1LC0xMC41MzUyOSAyMy41NTQwNSwtMjMuNTU0MDV6Ii8+PC9nPjwvZz48L3N2Zz4=';
    class System {
        constructor () {}
        getInfo() {
            return {
                id: 'system',
                name: 'System',
                color1: '#FFAB19',
                color2: '#FFAB19',
                color3: '#FFAB19',
                menuIconURI: icon,
                blockIconURI: icon2,
                blocks: [
                      {
                        opcode: 'getOS',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'operating system'
                      },
                      {
                        opcode: 'getBrowser',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'browser'
                      },
                    {
                        opcode: 'Emptying',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Clear the console',
                        arguments: {}
                    },
                    {
                        opcode: 'Information',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Information [string]',
                        arguments: {
                            string: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'Information'
                            }
                        }
                    },
                    {
                        opcode: 'Journal',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Journal [string]',
                        arguments: {
                            string: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'Journal'
                            }
                        }
                    },
                    {
                        opcode: 'Warning',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Warning [string]',
                        arguments: {
                            string: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'Warning'
                            }
                        }
                    },
                    {
                        opcode: 'Error',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Error [string]',
                        arguments: {
                            string: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'Error'
                            }
                        }
                    },
                    {
                        opcode: 'Timeron',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Start a timer named [string]',
                        arguments: {
                            string: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'Benchmark'
                            }
                        }
                    },
                    {
                        opcode: 'Timerlog',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Prints the time that the timer named [string] runs',
                        arguments: {
                            string: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'Benchmark'
                            }
                        }
                    },
                    {
                        opcode: 'Timeroff',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Ends a timer named [string] and prints the time it took from start to finish',
                        arguments: {
                            string: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'Benchmark'
                            }
                        }
                    },
                ]
            };
        }
        Emptying () {
            console.clear();
        }
        Information ({string}) {
            console.info(string);
        }
        Journal ({string}) {
            console.log(string);
        }
        Warning ({string}) {
            console.warn(string);
        }
        Error ({string}) {
            console.error(string);
        }
        Timeron ({string}) {
            console.time(string);
        }
        Timerlog ({string}) {
            console.timeLog(string);
        }
        Timeroff ({string}) {
            console.timeEnd(string);
        }
        

    getOS () {
      const userAgent = navigator.userAgent;
      if (userAgent.includes('Windows')) {
        return 'Windows';
      } else if (userAgent.includes('Android')) {
        return 'Android';
      } else if (userAgent.includes('iPhone') || userAgent.includes('iPod') || userAgent.includes('iPad')) {
        return 'iOS';
      } else if (userAgent.includes('Linux')) {
        return 'Linux';
      } else if (userAgent.includes('CrOS')) {
        return 'ChromeOS';
      } else if (userAgent.includes('Mac OS')) {
        return 'macOS';
      }
      return 'Other';
    }

    getBrowser () {
      const userAgent = navigator.userAgent;
      if (userAgent.includes('Chrome')) {
        return 'Chrome';
      } else if (userAgent.includes('Firefox')) {
        return 'Firefox';
      } else if (userAgent.includes('Safari')) {
        return 'Safari';
      }
      return 'Other';
    }
    }
    Scratch.extensions.register(new System());
})(Scratch);
