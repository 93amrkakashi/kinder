import { useState } from "react";
import { uuidv4 } from "@firebase/util";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { auth, db, storage } from "../../firebase";
import { collection, doc, query, setDoc, where } from "firebase/firestore";
import { notifygood } from "./notify";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";

export function useAddStudent() {
  const [isLoading, setLoading] = useState(false);
  const [file, setFile] = useState(null);

  async function addStudent(student) {
    setLoading(true);
    const id = uuidv4();
    const fileRef = ref(storage, "students/" + id);
    await uploadBytes(fileRef, file);
    const avatarURL = await getDownloadURL(fileRef);
    await setDoc(doc(db, "students", id), {
      ...student,
      id,
      payment:false,
      picture: avatarURL,
      date: Date.now(),
    });
    notifygood("student added");
    setLoading(false);
  }
  return { addStudent, setFile, isLoading };
}

export function useStudents(searchItem) {
  const q = !searchItem
    ? query(collection(db, "students"))
    : query(collection(db, "students"), where("sonName", "==", searchItem));
  const [students, isLoading, error] = useCollectionData(q);
  if (error) throw error;
  return { students, isLoading };
}


export function useParents(searchItem) {
  const q = !searchItem
    ? query(collection(db, "students"))
    : query(collection(db, "students"), where("fatherName", "==", searchItem));
  const [parents, isLoading, error] = useCollectionData(q);
  if (error) throw error;
  return { parents, isLoading };
}


export function useStudent(id) {
  const q = doc(db, "students", id);
  const [student, isLoading] = useDocumentData(q);

  return { student, isLoading };
}