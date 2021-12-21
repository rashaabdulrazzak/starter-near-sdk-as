

@nearBindgen
export class Contract{
  private message: string = 'hello world'
  // return the string 'hello world'
  helloWorld(): string {
    return this.message
  }
}