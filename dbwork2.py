import pgsql
# importpip install psycopg2-binary cre2
import datetime
import json


class Database:
    _conn = 0





    def getdata(self):
        sql = "SELECT * FROM public.log;"
        sqlupdate = "UPDATE public.log SET alarm = FALSE WHERE alarm = 'TRUE';"
        self.conn = None
        try:
            # p = cre2.XML('ui')
            # dbn = p.parsingFile("database", True)
            # us = p.parsingFile("user", True)
            # pas = p.parsingFile("password", True)
            # hos = p.parsingFile("host", True)
            try:
                db = pgsql.Connection(database="autsave", user="postgres", password="")
                x = db("SELECT id, hostname, filepath, date, filesize, server FROM public.info ORDER BY date DESC;")
                db.close()
                jsonString = json.dumps(x)
                return jsonString


            except Exception as error:
                print(error)

        except Exception as error:
            print(error)
        # print("INSERT INTO public.info(hostname, filepath, date, filesize) VALUES('%s', '%s', '%s', %s)", str(data[0]),data[1], data[2], data[3])
