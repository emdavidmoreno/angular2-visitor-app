import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable()
export class VisitorService {
	constructor(private db: AngularFirestore) { }

	public getAll(): Observable<any[]> {
		return this.db.collection('visitors').snapshotChanges()
			.pipe(map(actions => actions.map(a => {
				const data = a.payload.doc.data();
				const id = a.payload.doc.id;
				return { id, ...data };
			})
			));
	}
	public checkOut(visitor) {
		const visitorRef = this.db.doc('visitors/' + visitor.id)
		console.log(visitor);
		visitor.exit_time = new Date().toLocaleTimeString();
		visitorRef.update(visitor);
	}
	public addVisitor = (visitor) => {
		visitor.arrived_time = new Date().toLocaleTimeString();
		this.db.collection('visitors').add(visitor);
	}
}
