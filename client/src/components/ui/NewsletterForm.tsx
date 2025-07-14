import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { insertNewsletterSchema } from '@shared/schema';

const formSchema = insertNewsletterSchema.extend({
  email: z.string().email('Please enter a valid email'),
});

type FormValues = z.infer<typeof formSchema>;

const NewsletterForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const mutation = useMutation({
    mutationFn: (data: FormValues) => {
      return apiRequest('POST', '/api/newsletters', data);
    },
    onSuccess: () => {
      toast({
        title: 'Subscribed!',
        description: 'You\'ve been successfully subscribed to our newsletter.',
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: (error) => {
      toast({
        title: 'Something went wrong.',
        description: error instanceof Error 
          ? (error.message.includes('409') 
              ? 'You are already subscribed to our newsletter.' 
              : error.message) 
          : 'Please try again later.',
        variant: 'destructive',
      });
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    mutation.mutate(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6">
        <div className="flex flex-col sm:flex-row">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormControl>
                  <Input 
                    placeholder="Enter your email" 
                    type="email" 
                    className="w-full px-4 py-3 rounded-md" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <Button 
              type="submit" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default NewsletterForm;
