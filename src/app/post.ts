export class Post {
  private _id: number;
  private _title: string;
  private _content: string;
  private _loveIts: number;
  private _created_at: string;

constructor(id: number, title: string, content: string, loveIts: number, created_at: string)
{
  this._id = id;
  this._title = title;
  this._content = content;
  this._loveIts = loveIts;
  this._created_at = created_at;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }

  get loveIts(): number {
    return this._loveIts;
  }

  set loveIts(value: number) {
    this._loveIts = value;
  }

  get created_at(): string {
    return this._created_at;
  }

  set created_at(value: string) {
    this._created_at = value;
  }
}

