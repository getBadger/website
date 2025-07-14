import { useAuth } from "@/hooks/use-auth";
import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, Mail, MessageSquare, Users } from "lucide-react";
import { Contact, Newsletter } from "@shared/schema";

interface DashboardData {
  user: {
    id: number;
    username: string;
    createdAt: string;
  };
  stats: {
    contacts: number;
    newsletters: number;
  };
}

export default function DashboardPage() {
  const { user, logoutMutation } = useAuth();
  const { data, isLoading, error } = useQuery<DashboardData>({
    queryKey: ["/api/dashboard"],
    queryFn: async () => {
      const res = await apiRequest("GET", "/api/dashboard");
      return res.json();
    },
  });

  const contactsQuery = useQuery<Contact[]>({
    queryKey: ["/api/dashboard/contacts"],
    queryFn: async () => {
      try {
        const res = await apiRequest("GET", "/api/dashboard/contacts");
        if (!res.ok) return [];
        return res.json();
      } catch (error) {
        console.error("Error fetching contacts:", error);
        return [];
      }
    },
  });

  const newslettersQuery = useQuery<Newsletter[]>({
    queryKey: ["/api/dashboard/newsletters"],
    queryFn: async () => {
      try {
        const res = await apiRequest("GET", "/api/dashboard/newsletters");
        if (!res.ok) return [];
        return res.json();
      } catch (error) {
        console.error("Error fetching newsletters:", error);
        return [];
      }
    },
  });

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-2xl font-bold text-red-500 mb-4">Error Loading Dashboard</h1>
        <p className="text-muted-foreground mb-6">
          {error instanceof Error ? error.message : "An unexpected error occurred"}
        </p>
        <Button onClick={handleLogout}>Sign Out</Button>
      </div>
    );
  }

  const formatDate = (dateString: string | Date) => {
    if (!dateString) return "N/A";
    const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, <span className="font-medium">{user?.username}</span>!
          </p>
        </div>
        <Button variant="outline" onClick={handleLogout}>
          Sign Out
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Account Type</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Administrator</div>
            <p className="text-xs text-muted-foreground">
              Member since {user?.createdAt ? formatDate(user.createdAt) : "N/A"}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Contact Messages</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {data?.stats?.contacts || 0}
            </div>
            <p className="text-xs text-muted-foreground">
              Total contact form submissions
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Newsletter Subscriptions</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {data?.stats?.newsletters || 0}
            </div>
            <p className="text-xs text-muted-foreground">
              Total newsletter subscribers
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="contacts" className="w-full">
        <TabsList>
          <TabsTrigger value="contacts">Contact Messages</TabsTrigger>
          <TabsTrigger value="newsletters">Newsletter Subscribers</TabsTrigger>
        </TabsList>
        <TabsContent value="contacts" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Messages</CardTitle>
              <CardDescription>
                Review messages from your website visitors.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {contactsQuery.isLoading ? (
                <div className="flex justify-center p-4">
                  <Loader2 className="h-6 w-6 animate-spin text-primary" />
                </div>
              ) : contactsQuery.data && contactsQuery.data.length > 0 ? (
                <div className="rounded-md border">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-muted/50">
                          <th className="text-left p-3 font-medium">Name</th>
                          <th className="text-left p-3 font-medium">Email</th>
                          <th className="text-left p-3 font-medium">Company</th>
                          <th className="text-left p-3 font-medium">Message</th>
                          <th className="text-left p-3 font-medium">Date</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {contactsQuery.data.map((contact) => (
                          <tr key={contact.id}>
                            <td className="p-3">{contact.name}</td>
                            <td className="p-3">{contact.email}</td>
                            <td className="p-3">{contact.company || "N/A"}</td>
                            <td className="p-3">
                              <div className="max-w-xs truncate">{contact.message}</div>
                            </td>
                            <td className="p-3">{formatDate(contact.createdAt)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <div className="text-center p-4 text-muted-foreground">
                  No contact messages yet.
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="newsletters" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Newsletter Subscribers</CardTitle>
              <CardDescription>
                Manage your newsletter subscribers.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {newslettersQuery.isLoading ? (
                <div className="flex justify-center p-4">
                  <Loader2 className="h-6 w-6 animate-spin text-primary" />
                </div>
              ) : newslettersQuery.data && newslettersQuery.data.length > 0 ? (
                <div className="rounded-md border">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-muted/50">
                          <th className="text-left p-3 font-medium">Email</th>
                          <th className="text-left p-3 font-medium">Status</th>
                          <th className="text-left p-3 font-medium">Date Subscribed</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {newslettersQuery.data.map((newsletter) => (
                          <tr key={newsletter.id}>
                            <td className="p-3">{newsletter.email}</td>
                            <td className="p-3">
                              <span className={`inline-flex rounded-full px-2 py-1 text-xs ${newsletter.isActive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                                {newsletter.isActive ? "Active" : "Inactive"}
                              </span>
                            </td>
                            <td className="p-3">{formatDate(newsletter.createdAt)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <div className="text-center p-4 text-muted-foreground">
                  No newsletter subscribers yet.
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}