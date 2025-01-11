import { Button, Card } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { send } from 'emailjs-com';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const contactSchema = z.object({
  name: z.string().nonempty('Name is required'),
  reply_to: z.string().email('Invalid email address'),
  message: z.string().nonempty('Message is required'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    setIsLoading(true);

    const emailData = {
      to_name: 'Htet Htet Wai',
      from_name: data.reply_to,
      message: data.message,
      reply_to: data.name,
    };

    send('service_wbg2d2l', 'template_duiooh5', emailData, 'EUzxm7JLM3VhK9LIC')
      .then((response) => {
        toast.success('Message sent successfully!', {
          position: 'bottom-right',
          autoClose: 3000,
        });
        setIsLoading(false);
        reset();
      })
      .catch((error) => {
        toast.error('Error sending message!', {
          position: 'bottom-right',
          autoClose: 3000,
        });
        setIsLoading(false);
      });
  };

  return (
    <div
      id="contact"
      className="p-[1rem] mt-8 mb-8 dark:text-basetextClr dark:bg-black"
    >
      <ToastContainer />
      <div className="text-baseClr font-bold text-2xl flex justify-center dark:text-basetextClr">
        Contact Me
      </div>
      <div className="flex w-full flex-wrap mt-8 gap-5">
        <Card className="w-[45%] s:w-full sm:w-full md:w-full p-[1rem] border-2 border-baseClr">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                type="text"
                placeholder="Enter your name"
                {...register('name')}
                className={`p-2 w-full focus:outline-none border-2 rounded-md text-gray-900 ${errors.name ? 'border-red-500' : 'border-grey'}`}
              />
              {errors.name && (
                <p className="text-red text-xs mt-1">{errors.name.message}</p>
              )}
            </div>

            <div className="mt-3">
              <input
                type="text"
                placeholder="Enter your email"
                {...register('reply_to')}
                className={`p-2 w-full focus:outline-none border-2 rounded-md text-gray-900 ${errors.reply_to ? 'border-red-500' : 'border-grey'}`}
              />
              {errors.reply_to && (
                <p className="text-red text-xs mt-1">
                  {errors.reply_to.message}
                </p>
              )}
            </div>

            <div className="mt-3">
              <textarea
                placeholder="Enter Message"
                rows={5}
                {...register('message')}
                className={`w-full p-2 border-2 rounded-md focus:outline-none focus:ring-0 focus:border-purple-500 text-gray-900 resize-none ${errors.message ? 'border-red-500' : 'border-grey'}`}
              />
              {errors.message && (
                <p className="text-red text-xs mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className="w-full flex justify-end mt-3">
              <button
                className="p-2 text-white bg-baseClr rounded-md text-basetextClr"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </Card>

        <div className="w-[45%] s:w-full sm:w-full md:w-full">
          <div className="text-justify">
            Let&apos;s make great things happen together! Whether you have a
            quick question, a collaboration idea, or just want to say hi,
            I&apos;d love to hear from you. You can reach me via email, phone,
            or connect with me on LinkedIn and GitHub. Prefer a quicker
            response? Give me a call at {}
            <span className="text-black font-bold dark:text-basetextClr">
              0622643784
            </span>{' '}
            {}Feel free to drop me a message anytime—I’m just an email or
            connection away!
          </div>

          <div>
            <Link
              href={'http://linkedin.com/in/wei-wei-4238662b3'}
              target="_blank"
            >
              <div className="text-textClr flex gap-2 mt-5">
                <Image
                  src="/image/linkedin.svg"
                  alt="Linkedin"
                  width={25}
                  height={25}
                />
                <div className="mt-1 text-black font-bold dark:text-basetextClr">
                  Linkdin
                </div>
              </div>
            </Link>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=alicenicole510@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex gap-2 mt-3">
                <Image
                  src="/image/email-mail.svg"
                  alt="Email"
                  width={25}
                  height={25}
                />
                <div className="mt-1 text-black font-bold dark:text-basetextClr">
                  Email
                </div>
              </div>
            </a>
            <Link href={'https://github.com/hhtetwei'} target="_blank">
              <div className="text-textClr flex gap-1 mt-3">
                <Image
                  src="/image/github.svg"
                  alt="Github"
                  width={30}
                  height={30}
                />
                <div className="mt-1 text-black font-bold dark:text-basetextClr">
                  Github
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
