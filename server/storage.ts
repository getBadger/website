import { 
  users, type User, type InsertUser, 
  contacts, type Contact, type InsertContact,
  newsletters, type Newsletter, type InsertNewsletter 
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  
  createNewsletter(newsletter: InsertNewsletter): Promise<Newsletter>;
  getNewsletterByEmail(email: string): Promise<Newsletter | undefined>;
  getNewsletters(): Promise<Newsletter[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }
  
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const [contact] = await db.insert(contacts).values(insertContact).returning();
    return contact;
  }
  
  async getContacts(): Promise<Contact[]> {
    return await db.select().from(contacts);
  }
  
  async createNewsletter(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    const [newsletter] = await db.insert(newsletters).values(insertNewsletter).returning();
    return newsletter;
  }
  
  async getNewsletterByEmail(email: string): Promise<Newsletter | undefined> {
    const [newsletter] = await db.select().from(newsletters).where(eq(newsletters.email, email));
    return newsletter;
  }
  
  async getNewsletters(): Promise<Newsletter[]> {
    return await db.select().from(newsletters);
  }
}

export const storage = new DatabaseStorage();
